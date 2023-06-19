import React from 'react'

export const StoreName = () => {
    return (
        <React.Fragment>
            <div className='store-screen' >
                <h1 style={{
                    left: 'calc(50% - 126px/2)',
                    top: 0
                }} className='heading'>LOGO</h1>

                <section className='container'>
                    <div className='store-div' >
                        <article>
                        <h2 className='store-head'>Name Your Store</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus nulla eget adipiscing faucibus platea. Eu ultrices ipsum</p>
                        </article>
                    </div>
                </section>
            </div>
        </React.Fragment>
    )
}
