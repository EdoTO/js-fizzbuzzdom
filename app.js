console.log('fizzbuzzdom')

const wrapper = document.querySelector('.box-wrapper')

for( let i = 1; i <= 100; i++) {
    const div = document.createElement('div')

    if( i % 3 === 0 && i % 5 === 0) {
        div.append( 'fizzbuzz')
        div.classList.add('bg-red')

    } else if( i % 3 === 0 ) {
        div.append( 'fizz' )
        div.classList.add('bg-green')
    } else if( i % 5 === 0 ) {
        div.append( 'buzz' )
        div.classList.add('bg-yellow')
    } else {
        div.append(i)
        div.classList.add('bg-blue')
    }

    wrapper.append(div)
}