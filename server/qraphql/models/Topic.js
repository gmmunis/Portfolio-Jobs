




class Topic {

  constructor(model, user) {
    this.Model = model;
    this.user = user;
  }

  getAllByCategory(forumCategory) {
    return this.Model
    .find({forumCategory})
    .populate('user')
    .populate('forumCategory');
  }

  async create(topicData) {
    if (!this.user) {
      throw new Error('Você precisa estar autorizado para criar um tópico!');
    }

    topicData.user = this.user;
    topicData.slug = "nao-importa";

    const createdTopic = await this.Model.create(topicData);
    return this.Model.findById(createdTopic._id).populate('user').populate('forumCategory');
  }
}

module.exports = Topic;