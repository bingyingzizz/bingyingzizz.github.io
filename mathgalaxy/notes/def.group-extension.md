# 群扩张　`def.group-extension`　·　说明
根 `../`

⭐ **关键点：没有截面也要有 $G$-模结构。** 扩张只给了一个正合列，根本没给 $G \to E$ 的映射；但**共轭**照样让 $G$ 作用在 $A$ 上。所以「$A$ 是个 $G$-模」是扩张**自带**的结构，不是外面贴上去的。

**良定义性**：若 $\tilde g^{\prime} = \tilde g\, i(a_{0})$，则 $\tilde g^{\prime} a \tilde g^{\prime -1} = \tilde g a_{0} a a_{0}^{-1} \tilde g^{-1} = \tilde g a \tilde g^{-1}$ —— 这一步**正好用了 $A$ 交换**。

**三类扩张，分别由不同的东西管**：
- **分裂的**（有群同态截面 $G \to E$）：$E \cong A \rtimes_{\varphi} G$；截面的选择由 $H^{1}(G, A)$ 管。
- **一般的**：由 $H^{2}(G, A)$ 管（见「二维上同调分类群扩张」）。
- **$G$ 在 $A$ 上作用平凡**：此时扩张就是「$A$ 被 $G$ 的阿贝尔扩张」，由 $\operatorname{Ext}^{1}_{\mathbb{Z}}(G, A)$ 分类 —— 这一档与 $H^{2}$ 在作用平凡时重合。

> 续见 notes/def.group-extension.2.md
