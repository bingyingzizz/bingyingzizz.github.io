# 可定向流形　`def.orientable-manifold`
可定向流形与定向
layer 16 · 定义 · 流形与向量丛 · 微分几何
[在星图里打开](../#n=def.orientable-manifold)　·　[节点索引](../index.md)

**在说什么**：能不能在整张流形上一致地规定「哪个方向是正的」—— 判据是换卡时 Jacobi 行列式恒为正，也就是搬坐标牌时不出现镜像翻转。

设 $M$ 是 $n$ 维光滑流形。图册 $\mathcal{A}$ 叫**定向图册**，如果其中任意两张卡 $(U,\varphi)$、$(V,\psi)$ 在重叠处满足

$$\det\Bigl(\mathrm{d}(\psi \circ \varphi^{-1})_{x}\Bigr) > 0\qquad \bigl(x \in \varphi(U \cap V)\bigr).$$
> 陈述续见 [nodes/def.orientable-manifold.2.md](./def.orientable-manifold.2.md)


## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/def.orientable-manifold.3.md](./def.orientable-manifold.3.md)

## 它能推出什么 / 谁在用它
- …另有出边，续页见 [nodes/def.orientable-manifold.4.md](./def.orientable-manifold.4.md)

refs: Tu, An Introduction to Manifolds, 2nd ed., Ch. 6 §21

> 说明见 `notes/def.orientable-manifold.md`

引用：`def.orientable-manifold`（内容 v0.9.3）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
