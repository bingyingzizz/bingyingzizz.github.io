# Bernstein 多项式逼近　`thm.bernstein-approximation`　·　说明
根 `../`

证明写在边 `imp.bernstein-approximation` 上：把 $B_nf(x)$ 看成 $f(S_n/n)$ 的期望（$S_n\sim\mathrm{Bin}(n,x)$），用二项矩恒等式 $\mathbb E[S_n/n]=x$、$\operatorname{Var}(S_n/n)=x(1-x)/n\le 1/(4n)$ 与 $f$ 的一致连续性把误差拆成两段（偏差 $<\delta$ 处 $<\varepsilon$，其余用 Markov 不等式给概率 $\le 1/(4n\delta^2)$），取 $n$ 充分大即得一致收敛。

⭐ 与 Stone–Weierstrass 分工：这条给「一个显式算子列」，只对 $[0,1]$、只对实值；S-W 给「只要代数性质就够」，不管构造。两者互相印证，也互相不能替代。
