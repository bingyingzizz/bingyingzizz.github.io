# 扩充复平面是紧的　`prop.extended-plane-compact`　·　说明
根 `../`

**证明**：球极投影是连续双射（公式是有理函数，分母 $1 + |z|^{2} > 0$），从紧空间 $S^{2}$ 到 Hausdorff 空间 $\widehat{\mathbb{C}}$ 的连续双射自动是同胚。$S^{2}$ 紧（$\mathbb{R}^{3}$ 中的有界闭集），故 $\widehat{\mathbb{C}}$ 紧。第 2、3 条由同胚与 $S^{2}$ 的列紧性直接得到。∎

⭐ **它的用处**：把「$\infty$ 附近的行为」变成「球面上一点附近的行为」，于是「整函数在 $\infty$ 处是什么奇点」这种说法才有意义 —— 这是 `thm.picard-great` 与`def.entire-meromorphic` 里「亚纯 = 扩充平面上除极点外全纯」的前提。

⚠️ 紧性属于 $\widehat{\mathbb{C}}$，不属于 $\mathbb{C}$：$z_{n} = n$ 在 $\mathbb{C}$ 里没有收敛子列，在 $\widehat{\mathbb{C}}$ 里收敛到 $\infty$。
