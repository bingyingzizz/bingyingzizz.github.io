# 米田引理 $\implies$ 稠密性定理
`imp.density` · 推出 · strong 边 · 根 `../`

`lem.yoneda` 米田引理 + `def.slice-category` 切片范畴 → `thm.density` 稠密性定理

$$\Bigl(\varinjlim_{(X,s)} h_{X}\Bigr)(Y) = \varinjlim_{(X,s)} \operatorname{Hom}_{\mathcal{C}}(Y, X) \longrightarrow T(Y)$$

而右边这个集合正是「以 $(X, s)$ 为指标、把每个 $\psi : Y \to X$ 送到 $T(\psi)(s) \in T(Y)$」的余极限。取 $(X, s) = (Y, t)$ 与 $\psi = 1_{Y}$，这一项的像就是 $t$ 本身；反过来，自然性 $T(\psi)(s) \in T(Y)$ 说明每一项都已经落在 $T(Y)$ 里。于是对每个 $t \in T(Y)$ 都有来源，且不同的 $t$ 给出不同的项 —— 逐点双射。∎

> 把这条和米田引理并排看：米田说「$h_{X}$ 到 $T$ 的箭头 = $T$ 在 $X$ 处的元素」，稠密性把它反过来用 —— 既然元素就是箭头，那么全部元素（即 $\mathcal{C}_{T}$）就决定了 $T$ 自己。
