# 光滑映射　`def.smooth-map`　·　续页（第 2 页）
[在星图里打开](../#n=def.smooth-map)　·　第 1 页 [nodes/def.smooth-map.md](./def.smooth-map.md)

## 陈述（续）
设 $N$（$n$ 维）、$M$（$m$ 维）是光滑流形，$F : N \to M$ 连续。称 $F$ **光滑**（$C^{\infty}$），如果对每张图卡 $(U,\varphi)$（$N$ 的）与 $(V,\psi)$（$M$ 的），复合
$$\psi \circ F \circ \varphi^{-1} : \varphi\bigl(U \cap F^{-1}(V)\bigr) \longrightarrow \psi(V)$$

都是 $C^{\infty}$（定义域在 $\mathbb{R}^{n}$ 里开，值域在 $\mathbb{R}^{m}$ 里开）。这个复合叫 $F$ 的**局部表示**，即 $F$ 在某块坐标里的样子。
**等价说法**：只对 $N$ 的图册与 $M$ 的图册里的卡验证就够了 —— 换卡只多乘一个转移映射，它光滑，所以光滑性不因换卡而变（证明在边上）。
若 $F$ 光滑、可逆、且逆也光滑，称 $F$ 是**微分同胚**；此时 $N$ 与 $M$ 视为同一个光滑流形。$F : M \to \mathbb{R}$ 光滑时记 $F \in C^{\infty}(M)$，$C^{\infty}(M)$ 是 $\mathbb{R}$-代数（逐点加乘）。

> 续见 [nodes/def.smooth-map.3.md](./def.smooth-map.3.md)
