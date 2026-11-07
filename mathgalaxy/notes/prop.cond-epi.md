# 凝聚态集满态射的判据　`prop.cond-epi`　·　说明
根 `../`

**结论**：$p:X\to Y$ 在 $\mathrm{Cond}$ 中满，当且仅当对每个自由紧 Hausdorff 空间 $F=\beta I$，$X(F)\to Y(F)$ 是满射。下面两个方向都证完。

**引理 1（层里的满 = 局部可提升）**：景上的层范畴中，$p:X\to Y$ 满 $\iff$ 对每个对象 $S$ 与每个 $y\in Y(S)$，存在覆盖 $\{S_i\to S\}$ 与 $x_i\in X(S_i)$，使 $p(x_i)=y|_{S_i}$。

证明：($\Leftarrow$) 设 $g,h:Y\to Z$ 且 $g\circ p=h\circ p$。对任意 $S,y$，取覆盖与提升 $x_i$；层的局部性给出 $g(y)|_{S_i}=g(p(x_i))=h(p(x_i))=h(y)|_{S_i}$，故 $g(y)=h(y)$，即 $p$ 满。

> 续见 notes/prop.cond-epi.2.md
