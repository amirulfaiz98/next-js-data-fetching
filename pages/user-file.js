function UserProfilePage() {
    return <h1>Max</h1>
}

export default UserProfilePage;

export async function getServerSideProps(context) {
    const { params, req, res } = context;
    return {
        props: {
            username: 'Max',
        },
    };
}