# 仿射联络　`def.affine-connection`　·　续页（第 2 页）
[在星图里打开](../#n=def.affine-connection)　·　第 1 页 [nodes/def.affine-connection.md](./def.affine-connection.md)

## 陈述（续）
设 $M$ 是光滑流形，$\mathfrak{X}(M)$ 是光滑向量场的集合。**仿射联络**（线性联络）是一个映射

$$\nabla : \mathfrak{X}(M)\times\mathfrak{X}(M)\longrightarrow\mathfrak{X}(M),\qquad (X,Y)\longmapsto\nabla_{X}Y ,$$
满足三条：
1. 对第一个变元 $C^{\infty}(M)$-线性：$\nabla_{fX+gY}Z = f\,\nabla_{X}Z+g\,\nabla_{Y}Z$；
2. 对第二个变元 $\mathbb{R}$-线性：$\nabla_{X}(aY+bZ) = a\,\nabla_{X}Y+b\,\nabla_{X}Z$；
3. **Leibniz 律**：$\nabla_{X}(fY) =
 (Xf)\,Y+f\,\nabla_{X}Y$。
$\nabla_{X}Y$ 叫 $Y$ 沿 $X$ 的**协变导数**。在卡里设 $\nabla_{\partial_{i}}\partial_{j} = \Gamma^{k}_{ij}\partial_{k}$，则
$$\nabla_{X}Y = \sum_{k}\Bigl(X^{j}\partial_{j}Y^{k}+\Gamma^{k}_{ij}X^{i}Y^{j}\Bigr)\partial_{k}.$$

> 续见 [nodes/def.affine-connection.3.md](./def.affine-connection.3.md)
