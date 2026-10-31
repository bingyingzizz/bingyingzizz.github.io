# 测地线　`def.geodesic`
测地线与测地线方程
layer 26 · 定义 · 内蕴几何 · 微分几何
[在星图里打开](../#n=def.geodesic)　·　[节点索引](../index.md)

设 $\gamma : I\to S$ 是曲面 $S$ 上按弧长参数化的曲线（$\langle \dot\gamma,\dot\gamma\rangle = 1$）。$\gamma$ 叫**测地线**，如果它的切向量沿自身平行：

$$\nabla_{\dot\gamma(s)}\dot\gamma(s) = 0,\qquad s \in I.$$

展开成坐标就是**测地线方程**：
> 陈述续见 [nodes/def.geodesic.2.md](./def.geodesic.2.md)


## 它能推出什么 / 谁在用它
- 被 [`def.geodesic-curvature`](../nodes/def.geodesic-curvature.md) 测地曲率 用
- 被 [`def.exponential-map`](../nodes/def.exponential-map.md) 指数映射 用

- …另有出边，续页见 [nodes/def.geodesic.4.md](./def.geodesic.4.md)

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/def.geodesic.3.md](./def.geodesic.3.md)

refs: do Carmo, Differential Geometry of Curves and Surfaces, 第 4 章「曲面的内蕴几何」· 测地线；do Carmo, Differential Forms and Applications, 第 4 章「结构方程」· 测地线

> 说明见 `notes/def.geodesic.md`

引用：`def.geodesic`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
