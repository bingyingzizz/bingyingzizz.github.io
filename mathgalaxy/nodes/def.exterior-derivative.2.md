# 外微分　`def.exterior-derivative`　·　续页（第 2 页）
[在星图里打开](../#n=def.exterior-derivative)　·　第 1 页 [nodes/def.exterior-derivative.md](./def.exterior-derivative.md)

## 陈述（续）
设 $\omega = \sum_{I}a_{I}\,\mathrm{d}x^{I}$ 是 $U$ 上的 $k$-形式，其中 $\mathrm{d}x^{I} := \mathrm{d}x^{i_{1}}\wedge\cdots\wedge\mathrm{d}x^{i_{k}}$。**外微分**定义为
$$\mathrm{d}\omega := \sum_{I}\mathrm{d}a_{I}\wedge\mathrm{d}x^{I} = \sum_{I}\sum_{j=1}^{n}\frac{\partial a_{I}}{\partial x^{j}}\,\mathrm{d}x^{j}\wedge\mathrm{d}x^{I}.$$
对函数（$0$-形式）它就是全微分 $\mathrm{d}f = \sum_{j}\partial_{j}f\,\mathrm{d}x^{j}$。基本性质：
1. $\mathbb{R}$-线性：$\mathrm{d}(a\omega+b\eta) = a\,\mathrm{d}\omega+b\,\mathrm{d}\eta$；
2. **分次 Leibniz 律**：$\omega$ 是 $k$-形式时 $\mathrm{d}(\omega\wedge\eta) = \mathrm{d}\omega\wedge\

> 续见 [nodes/def.exterior-derivative.3.md](./def.exterior-derivative.3.md)
