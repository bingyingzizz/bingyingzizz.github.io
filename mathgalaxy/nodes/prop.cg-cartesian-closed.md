# 紧生成空间是笛卡尔闭的　`prop.cg-cartesian-closed`
紧生成空间是笛卡尔闭范畴
layer 17 · 定理 · 紧生成空间与弱 Hausdorff · 拓扑学
[在星图里打开](../#n=prop.cg-cartesian-closed)　·　[节点索引](../index.md)

设 $X, Y, Z$ 是紧生成空间。则存在同胚

$$kC\bigl(k(X \times Y),\ kZ\bigr) \;\cong\; kC\bigl(kX,\ kC(kY, kZ)\bigr).$$

等价的说法是 $k\mathbf{Top}$ 里成立 **currying**：

$$C\bigl(k(X \times Y),\ Z\bigr) \;\cong\; C\bigl(X,\ C(Y, Z)\bigr).$$

## 它能推出什么 / 谁在用它
- ⇒ [`cor.cond-ktop-finite-products`](../nodes/cor.cond-ktop-finite-products.md) 底空间保有限积

- …另有出边，续页见 [nodes/prop.cg-cartesian-closed.3.md](./prop.cg-cartesian-closed.3.md)

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/prop.cg-cartesian-closed.2.md](./prop.cg-cartesian-closed.2.md)

refs: Le Stum, An introduction to condensed mathematics, §2.3

> 说明见 `notes/prop.cg-cartesian-closed.md`

引用：`prop.cg-cartesian-closed`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
