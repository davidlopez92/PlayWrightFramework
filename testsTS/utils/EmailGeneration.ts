export function EmailGeneration(){
    const characters : string = "0123456789";
    let result : any = '';
    for(let i = 0; i < 3; i ++){
        result += characters.charAt(Math.floor(Math.random() * characters.length))
    }
    return `tester${result}@yopmail.com`;
}
