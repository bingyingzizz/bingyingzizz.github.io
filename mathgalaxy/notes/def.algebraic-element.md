# 代数元与极小多项式　`def.algebraic-element`　·　说明
根 `../`

⭐ **为什么那个集合是理想**：它非空（代数）、对加法与乘 $F[x]$ 中任意多项式封闭（代入 $\alpha$ 后仍是 $0$）。$F[x]$ 是主理想整环，所以它 $= (m_{\alpha})$；再取首一代表就得唯一性。

⭐ **极小多项式是「$\alpha$ 满足的最低条件」**：它不可约（若 $m = gh$ 且次数都更小，则 $g(\alpha)h(\alpha) = 0$，域里无零因子，故其中一个已 $0$，与极小性矛盾）。于是

$$F[x]/(m_{\alpha}) \;\cong\; F(\alpha), \qquad [F(\alpha):F] = \deg m_{\alpha}.$$

这条同构是整条链的引擎：**「造扩域」与「模掉多项式」是同一件事**。

⭐ 例子：$\alpha = \sqrt{2}$ 在 $\mathbb{Q}$ 上：$m = x^{2} - 2$，次数 2；$\alpha = \sqrt[3]{2}$：$m = x^{3} - 2$，次数 3；$\pi$、$e$ 在 $\mathbb{Q}$ 上**超越**（Hermite / Lindemann，本图未收）。

⚠ **极小多项式依赖基域**：$\sqrt{2}$ 在 $\mathbb{Q}$ 上次数 2，但在 $\mathbb{Q}(\sqrt{2})$ 上次数 $1$。说「$\alpha$ 的次数」时必须先指明基域。

> 续见 notes/def.algebraic-element.2.md
