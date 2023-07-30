function solution(numer1, denom1, numer2, denom2) {
    if(denom1 !== denom2) {
        const gcd = GCD(denom1, denom2); // 분모들의 최대공약수    
        const lcm = denom1 * denom2 / gcd; // 분모들의 최소공배수
        let m1 = numer1 * (lcm / denom1), m2 = numer2 * (lcm / denom2);
        
        m1 += m2;
        const finGCD = GCD(m1, lcm);
        
        return [m1 / finGCD, lcm / finGCD];
    } else { // 분모가 같은 경우
        const sum = numer1 + numer2; 
        const gcd = GCD(sum, denom1);
        
        return [sum / gcd, denom1 / gcd];
    }
}

const GCD = (d1, d2) => { // 최대공약수 구하는 함수
    if(d2 === 0) {
        return d1;
    }
    
    return GCD(d2, d1 % d2);
}