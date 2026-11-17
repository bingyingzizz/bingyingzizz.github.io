# Burnside 满射性
`imp.burnside` · 推出 · strong 边 · 根 `../`

`def.semisimple-representation` 半单表示 + `def.representation-morphism` 表示同态 + `def.subrepresentation` 子表示 + `def.direct-sum-representation` 表示的直和 → `thm.burnside-surjectivity` Burnside 满射性定理

令 $A'=\operatorname{End}_A(V)$、$A''=\operatorname{End}_{A'}(V)$，$\Phi(a)(v)=av$。
第一步（单向量）：固定 $v\in V$，令 $W=Av$。$W$ 是子表示，由 $V$ 半单存在子表示 $U$ 使 $V=W\oplus U$。投影 $p:V\to W$ 是 $A$-线性的，故 $p\in A'$。对 $f\in A''$，$f(v)=f(pv)=p f(v)\in W=Av$，故存在 $a\in A$ 使 $av=f(v)$。
第二步（有限组）：对 $V^n$ 作对角作用；$f^{\oplus n}$ 与 $A'$ 交换，故属于 $\operatorname{End}_{A'}(V^n)$。对向量 $(v_1,\ldots,v_n)$ 用第一步，得 $a\in A$ 使 $av_i=f(v_i)$ 对所有 $i$ 成立。
第三步（满射）：$V$ 有限维时是有限生成 $A'$-模，取生成元 $v_1,\ldots,v_n$。取 $a$ 匹配这些值；任意 $v=\sum a'_iv_i$（$a'_i\in A'$）满足 $f(v)=\sum a'_i f(v_i)=\sum a'_i

> 续见 proofs/imp.burnside.2.md
