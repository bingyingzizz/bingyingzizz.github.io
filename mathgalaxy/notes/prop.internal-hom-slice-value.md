# 内 Hom 的取值　`prop.internal-hom-slice-value`　·　说明
根 `../`

⚠️ **不能把 $X$ 直接代进 $\operatorname{Hom}_{\mathbb{Z}}$**：$X$ 只被假设为**拓扑斯对象**，不一定是阿贝尔群对象，于是 $j_{Z}^{-1}X$ 只是 $\mathcal{T}/Z$ 里的一个对象、$\operatorname{Hom}_{\mathbb{Z}}(j_{Z}^{-1}X,\cdot)$ 没有定义。例：$\mathcal{T} = \mathbf{Set}$、$X$ 取三元素集 $\{0,1,2\}$，$j_{X}^{-1}X$ 仍只是个集合。要用 $X$ 的版本，必须额外假设 $X\in\mathrm{Ab}(\mathcal{T})$（那时 $\mathbb{Z}\cdot X = X$）。
