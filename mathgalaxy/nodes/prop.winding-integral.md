# 绕数的积分表示　`prop.winding-integral`
绕数 = dz/(z−a) 的围道积分除以 2πi
layer 19 · 命题 · 复变函数基础 · 复变函数
[在星图里打开](../#n=prop.winding-integral)　·　[节点索引](../index.md)

设 $\gamma : [0,1] \to \mathbb{C}$ 是分段 $C^{1}$ 的闭曲线，$a \notin \gamma([0,1])$。则

$$n(\gamma, a) = \frac{1}{2\pi i} \oint_{\gamma} \frac{\mathrm{d}z}{z - a},$$

特别地右端**总是整数**。

## 它能推出什么 / 谁在用它
- ⇒ [`thm.winding-homotopy`](../nodes/thm.winding-homotopy.md) 绕数的同伦不变性
- ⇒ [`thm.argument-principle`](../nodes/thm.argument-principle.md) 辐角原理

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/prop.winding-integral.2.md](./prop.winding-integral.2.md)

refs: 王晓光《复变函数》· 曲线绕数的积分表示；Ahlfors, Complex Analysis (3rd ed.), Ch. 4 §4.2 · The Index of a Point

> 说明见 `notes/prop.winding-integral.md`

引用：`prop.winding-integral`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
