# 广义特征向量　`def.generalized-eigenvector`　·　续页（第 2 页）
[在星图里打开](../#n=def.generalized-eigenvector)　·　第 1 页 [nodes/def.generalized-eigenvector.md](./def.generalized-eigenvector.md)

## 陈述（续）
设 $T : V \to V$ 线性，$\lambda$ 是特征值。$v \ne 0$ 叫 $\lambda$ 的**广义特征向量**，若

$\Bigl(T - \lambda I\Bigr)^{k}(v) = 0$（对某个 $k \ge 1$）
最小的这样的 $k$ 叫 $v$ 的**阶**。全体广义特征向量加上 $0$ 构成**广义特征子空间**

$$G_{\lambda} := \bigcup_{k \ge 1}\ker(T - \lambda I)^{k} = \ker(T - \lambda I)^{m} ,$$
其中 $m$ 是 $\lambda$ 的代数重数（取到这个幂就稳定了）。

**核心事实**：$\dim G_{\lambda} = $ 代数重数，且 $V = \bigoplus_{\lambda} G_{\lambda}$（`thm.primary-decomposition` 的根子空间分解）。

> 续见 [nodes/def.generalized-eigenvector.3.md](./def.generalized-eigenvector.3.md)
