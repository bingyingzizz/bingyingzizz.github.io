# 丛的分类　`thm.bundle-classification`　·　说明
根 `../`

**Čech 口径要说清三件事**：

1. **系数不是阿贝尔群**：$\operatorname{GL}(k,\mathbb{R})$ 非交换，所以 $\check{H}^{1}(M;\operatorname{GL}(k))$ 只是一个**带基点的集合**（基点是平凡丛），不是群、不是向量空间。只有当系数落在阿贝尔群层里，Čech 上同调才是群 —— 本图 `def.cech-cohomology` 那条定义取的是阿贝尔预层复形，与本条不是同一个层级的东西，别混。
2. **只有 $0$ 次与 $1$ 次有意义**：$\check{H}^{0}$ 是整体截面（对 $\operatorname{GL}(k)$ 而言就是常值 $1$，因为 $M$ 连通），$\check{H}^{1}$ 是上面那个「上闭链模上边界」；$\check{H}^{2}$ 起要非阿贝尔上同调的技术（系数带群作用），本图完全不用。
3. **必须取余极限**：不同覆盖给出不同的 $\check{H}^{1}(\mathfrak{U};\cdot)$，但它们沿加细相容（每步是一个映射，而两个加细有公共加细），取余极限才是不依赖覆盖的量。

> 续见 notes/thm.bundle-classification.2.md
