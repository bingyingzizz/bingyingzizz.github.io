# 复偏导数的运算法则　`prop.complex-partial-rules`　·　说明
根 `../`

⭐ (5) 的第二项不是笔误：$g$ 的增量里有 $\Delta w$ 与 $\overline{\Delta w}$ 两块，而 $\overline{\Delta w} = \overline{f_z}\,\overline{\Delta z} + \overline{f_{\bar z}}\,\Delta z$ —— 共轭把两类项**互换**了，所以 $g_{\bar w}$ 那一块乘的是 $\overline{f_{\bar z}}$。

⭐ 全纯时 $f_{\bar z} = 0$、$g_{\bar w} = 0$，(5) 就退化成熟悉的 $(g \circ f)' = (g' \circ f)\,f'$ —— 只剩第一项。

⭐ 反过来这也解释了为什么「全纯 $\circ$ 实可微」一般不全纯：此时 $g_{\bar w} \ne 0$，第二项活着，而它偏偏带着 $\overline{f_{\bar z}}$ 这个 $\overline{\Delta z}$ 的系数。

📌 这五条都是把实偏导的对应法则照抄过来再重新组合，没有新的分析内容 —— 但它们让「验算一个表达式全不全纯」变成纯代数操作。
