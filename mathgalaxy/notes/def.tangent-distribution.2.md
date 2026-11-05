# 切分布　`def.tangent-distribution`　·　说明
根 `../`

**与辛几何、接触几何的接口**：秩 $n-1$ 的分布常写成某个处处非零 $1$-形式的核 $\ker\omega$；辛流形上 $\ker(\iota_{X}\omega)$ 是 $X$ 的**辛正交补**，在 $X \ne 0$ 的开集上秩 $n-1$（含 $X$ 本身，因为 $\omega(X,X) = 0$，见 `def.interior-product`）；$X$ 有零点时秩会跳（$\mathbb{R}^{2}$ 上 $X = x\partial_{x}$ 在 $x = 0$ 处核是整个切空间）。

这些核分布可不可积，正是 Frobenius（`thm.frobenius`）要判的事。

⚠️ 记号冲突：$\Gamma(\mathcal{D})$ 记「落在 $\mathcal{D}$ 里的向量场的全体」，它**既是实向量空间、也是** $C^{\infty}(M)$-模（逐点加法与实数倍封闭，「模」是比「向量空间」多出来的那层结构）；本图沿用 `def.bundle-section` 的 $\Gamma$。
