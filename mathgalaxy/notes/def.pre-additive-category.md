# 预加法范畴　`def.pre-additive-category`　·　说明
根 `../`

等价说法：$\operatorname{Hom}$ 函子 $\mathcal{C}^{\mathrm{op}} \times \mathcal{C} \to \mathbf{Ab}$ 存在，且遗忘函子 $\mathbf{Ab} \to \mathbf{Set}$ 之后就是通常的 Hom 函子。

因此每个 $\operatorname{Hom}(M, N)$ 都有零元，这个零元就是**零态射** $0 : M \to N$；零态射与任何态射复合仍为零态射。

例：$A\text{-}\mathbf{Mod}$、$\mathbf{Ab}$、$K\text{-}\mathbf{Vect}$ 都是预加法范畴。反例：$\mathbf{Set}$ 的 Hom 集通常没有群结构。

⚠️ 预加法**不要求**零对象与直和；加上这两样才叫加法范畴（见 `def.additive-category`）。
