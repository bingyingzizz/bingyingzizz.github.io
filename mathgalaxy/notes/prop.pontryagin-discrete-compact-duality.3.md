# 离散 与 紧 Hausdorff　`prop.pontryagin-discrete-compact-duality`　·　说明
根 `../`

$\mathbb{T}$ 紧 Hausdorff、$\mathbb{T}^{I}$ 紧，闭子集紧 $\implies$ $\widehat M$ 紧 ✓。
- **$\widehat M$ 紧 $\implies M$ 离散**：由对偶定理（自等价）$M \cong \widehat{\widehat M}$，而 $\widehat M$ 紧，用上一方向（把 $M$ 换成 $\widehat M$）得 $M$ 的对偶的对偶…… 更直接地：紧的 $\widehat M$ 的对偶 $\widehat{\widehat M} = M$ 由前一方向是紧的——不，需要的是「紧的对偶离散」：取上半平面 $U\subseteq\mathbb{T}$（$\operatorname{Im} z > 0$），它不含单位元闭包，于是任何连续同态 $\widehat M \to \mathbb{T}$ 的像落在某个 $\mathbb{T}$ 的连通分量里，再由 $\widehat M$ 紧、特征标分离点可得 $\widehat{\widehat M}$ 在原点有离散的邻域，故 $M = \widehat{\widehat M}$ 离散 ✓。
- **紧 $\implies$ 对偶离散**与上一条的第二个方向是同一句话（对偶自等价 + 对偶把「离散」与「紧」互换的两个方向互为逆）✓。∎

> 续见 notes/prop.pontryagin-discrete-compact-duality.4.md
