# 几乎正交引理　`lem.almost-orthogonal`　·　说明
根 `../`

证明：取 $x \notin F$，因 $F$ 闭有 $d := d(x, F) > 0$；取 $y' \in F$ 使 $\|x - y'\| \le d/(1 - \varepsilon)$，令 $e = (x - y')/\|x - y'\|$。对任意 $y \in F$，$y' + \|x - y'\|\,y \in F$，于是



$$\|e - y\| = \frac{\|x - y' - \|x - y'\| y\|}{\|x - y'\|} \ge \frac{d}{\|x - y'\|} \ge 1 - \varepsilon .$$

⭐ 这叫「几乎正交」：**在无穷维里拿不到真正的正交**（一般没有内积），只能拿到「$1 - \varepsilon$ 的正交」。这一步是「有限维 $\ne$ 无穷维」最省力的裂缝，单位球紧性的反方向全靠它。

⭐ 反面参照：Hilbert 空间里可以取 $\varepsilon = 0$（每个闭子空间都有正交补，见「闭子空间的正交投影」）—— 这也说明 Hilbert 空间在赋范空间里是「特殊的好」。
