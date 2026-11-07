# 满态射在自由空间上逐点检验
`imp.cond-epi` · 推出 · strong 边 · 根 `../`

`def.sheaf` 层 + `prop.free-projective` 自由紧 Haus 是投射对象 + `prop.chaus-quotient-of-free` 紧 Haus 是自由的商 → `prop.cond-epi` 凝聚态集满态射的判据

**引理（满 = 局部可提升）** 在层范畴中，$p$ 满 $\iff$ 每个 $y\in Y(S)$ 都有覆盖 $\{S_i\to S\}$ 与 $x_i\in X(S_i)$ 使 $p(x_i)=y|_{S_i}$。($\Leftarrow$) 用层的局部性：若 $g p=h p$，则逐块 $g(y)=h(y)$。($\implies$) 取 $\operatorname{Im}(p)$ 为「局部可提升的 $y$」所成预层的层化；$p$ 经 $X\to\operatorname{Im}(p)\hookrightarrow Y$ 分解，第二支是单的；$p$ 满迫使它满，而拓扑斯中单 + 满为同构，故 $\operatorname{Im}(p)=Y$。

> 续见 proofs/imp.cond-epi.3.md
