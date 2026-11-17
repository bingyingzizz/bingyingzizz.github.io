# Burnside 满射性定理　`thm.burnside-surjectivity`　·　说明
根 `../`

单向量：$V$ 半单，故 $V=Av\oplus W$，投影 $p:V\to Av$ 是 $A$-线性的，即 $p\in A'$。对 $f\in A''$，$f(v)=f(pv)=p f(v)\in Av$，故存在 $a\in A$ 使 $av=f(v)$。
多向量：对 $V^n$ 的对角作用重复上述论证，得同一个 $a$ 同时匹配任意有限组 $v_i$。
有限维时 $V$ 是有限生成 $A'$-模：取生成元 $v_1,\ldots,v_n$，由上一段得 $a$ 使 $av_i=f(v_i)$；任意 $v=\sum a'_iv_i$ 满足 $f(v)=\sum a'_i f(v_i)=av$，故 $\Phi(a)=f$。
这是双中心化子定理的初等版本，不需要 Jacobson 密度定理。
