# 完备化判据 + 关键计算 $\implies$ $\mathbf{Solid}$ 是阿贝尔子范畴
`imp.solid-abelian` · 推出 · strong 边 · 根 `../`

`lem.solid-completion-criterion` 完备化判据 + `prop.free-solid-solid` 自由固态群是固态的 + `cor.free-solid-product` 自由固态群是大乘积 → `thm.solid-abelian` 固态群构成阿贝尔子范畴

**(c) 一般 $C$。** 只需证 $\operatorname{RHom}(M(S,\mathbb{R}/\mathbb{Z}), C)$ 与 $R\Gamma(S,C)$ 都集中在同调次数 $\le 1$：然后用愚蠢截断 $C_{\le i}$ 逼近，$C_{\ge i+1}$ 的锥两边都在 $\ge i$，逐次比对即可。写 $C^i = \bigoplus_j \prod_k \mathbb{Z}$，令 $C_\mathbb{R}^i = \bigoplus_j \prod_k \mathbb{R}$、$C_{\mathbb{R}/\mathbb{Z}}^i = C_\mathbb{R}^i/C^i$，得复形短正合列
$$0 \to C \to C_\mathbb{R} \to C_{\mathbb{R}/\mathbb{Z}} \to 0.$$
只需对 $C_\mathbb{R}$ 与 $C_{\mathbb{R}/\mathbb{Z}}$ 证明两件事都集中在 $\le 0$。把它们写成典范截断的极限，化到有限复形；再逐项化到微分的核。取 $J_{i+1}$ 有限（滤过余极限 + pseudocoherence），此时 

> 续见 proofs/imp.solid-abelian.7.md
