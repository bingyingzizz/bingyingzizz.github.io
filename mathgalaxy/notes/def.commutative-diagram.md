# 交换图　`def.commutative-diagram`　·　说明
根 `../`

之所以叫「交换图」，是因为 $I$ 里的复合 $\beta \circ \alpha$ 被 $D$ 送到 $\mathcal{C}$ 里的复合 $D(\beta) \circ D(\alpha)$ —— 函子的定义里已经写死了两个复合相等，所以图上沿不同路径走结果一样，这正是「交换」。

$I$ 叫**索引范畴**：它只规定图的形状，不规定内容。

沿一个函子 $\lambda : I \to J$ 预复合，得到**重索引** $\lambda^{*} : \mathcal{C}^{J} \to \mathcal{C}^{I}$：把 $J$ 形状的图截成 $I$ 形状的图。特别地，到终范畴的唯一函子 $I \to \mathbf{1}$ 诱导**常图函子** $\Delta : \mathcal{C} \longrightarrow \mathcal{C}^{I}$，它把对象 $X$ 送到「每个位置都是 $X$、每条箭头都是 $1_X$」的常图。
