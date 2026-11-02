# 米田引理 $\implies$ 稠密性定理
`imp.density` · 推出 · strong 边 · 根 `../`

`lem.yoneda` 米田引理 + `def.slice-category` 切片范畴 → `thm.density` 稠密性定理

对每个 $(X, s) \in \mathcal{C}_{T}$，由 $s \in T(X)$ 与米田引理的对偶形式，有唯一对应的自然变换

$$\alpha^{s} : h_{X} \implies T, \qquad \alpha^{s}_{Y} : \operatorname{Hom}_{\mathcal{C}}(Y, X) \to T(Y),\quad \psi \mapsto T(\psi)(s)$$

切片范畴里的态射恰好是让这些 $\alpha^{s}$ 彼此相容的那些 $f$，所以 $\{\alpha^{s}\}_{(X,s)}$ 构成一个余锥，诱导出

$$\Theta : \varinjlim_{(X, s) \in \mathcal{C}_{T}} h_{X} \longrightarrow T$$

要证 $\Theta$ 是同构。逐点检验：对 $Y \in \mathcal{C}$，

> 续见 proofs/imp.density.2.md
