
import withApollo from '@/hoc/withApollo';
import withAuth from '@/hoc/withAuth';
import BaseLayout from '@/layouts/BaseLayout';


const Secret = withAuth(() => {

  return (
    <BaseLayout>
      <div className="bwm-form mt-5">
        <div className="row">
          <div className="col-md-5 mx-auto">
            <h1 className="page-title">Secret</h1>
            SECRET PAGE, ONLY AUTHENTICATED USERS ALLOWED!!!
          </div>
        </div>
      </div>
    </BaseLayout>
  )
}, ['instrutor', 'admin'])



export default withApollo(Secret);