# Baire 的三条等价刻画　`prop.baire-characterizations`　·　说明
根 `../`

- 三条的等价**不需要**任何前提（纯拓扑，任意空间都对）—— 需要假设的是「什么样的空间满足它们」：**完备度量空间**（`thm.baire`）与**局部紧 Hausdorff 空间**（`thm.locally-compact-baire`）。这两条的证明用的是完全不同的工具（前者用球套 / 完备性，后者用紧性取有限子覆盖 + 局部紧性）。
- ⚠️ **「Baire」不是「完备」的推论本身**，而是「完备 $\implies$ Baire」这一条定理；$\mathbb{Q}$ 是（不完备的）度量空间且**不是** Baire 空间（每个单点无处稠密、$\mathbb{Q}$ 可数），正好说明完备性不能去掉。
