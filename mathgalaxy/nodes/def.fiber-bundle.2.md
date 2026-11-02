# 纤维丛　`def.fiber-bundle`　·　续页（第 2 页）
[在星图里打开](../#n=def.fiber-bundle)　·　第 1 页 [nodes/def.fiber-bundle.md](./def.fiber-bundle.md)

## 陈述（续）
设 $E, B, F$ 是光滑流形，$\pi : E\to B$ 是光滑满射。称 $\pi$（连同 $E$）为**以 $F$ 为纤维、以 $B$ 为底的纤维丛**，若每点 $b\in B$ 有开邻域 $U$ 与微分同胚
$$\Phi : \pi^{-1}(U)\longrightarrow U\times F,\qquad \operatorname{pr}_{1}\circ\Phi = \pi ,$$
即 $\Phi$ 与投影交换。这样的 $\Phi$ 叫**局部平凡化**，$E_{b} := \pi^{-1}(b)$ 叫 $b$ 处的**纤维**
，$E$ 叫**全空间**。
**转移函数**：同一个开覆盖上取两组平凡化，重叠处必然差一个纤维自同胚
$$\Phi_{\alpha}\circ\Phi_{\beta}^{-1}\,(b, y) = \bigl(b,\ g_{\alpha\beta}(b)\,y\bigr),$$
其中 $g_{\alpha\beta} : U_{\alpha}\cap U_{\beta}\to\operatorname{Diff}(F)$ 叫**转移函数**。

> 续见 [nodes/def.fiber-bundle.3.md](./def.fiber-bundle.3.md)
