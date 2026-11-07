# ℚ 是有序域　`thm.rat-ordered-field`　·　说明
根 `../`

**④ 序良定义。** 对 $b, d > 0$ 定义 $a/b \le c/d :\iff ad \le bc$。若 $a/b = a'/b'$、$c/d = c'/d'$（$b,d,b',d' > 0$），则 $ab' = a'b$、$cd' = c'd$。由 $b'd' > 0$ 与 $bd > 0$，

$$ad \le bc \iff adb'd' \le bcb'd' \iff a'd'(bd) \le b'c'(bd) \iff a'd' \le b'c' ,$$

故 $\le$ 与代表元无关。

**⑤ 全序。** 对任意 $a/b, c/d$（$b, d > 0$），$\mathbb{Z}$ 的三分律给出 $ad < bc$、$ad = bc$、$ad > bc$ 恰有一种成立，分别对应 $<$、$=$、$>$。故 $\le$ 是全序；反对称性来自「$ad \le bc$ 且 $bc \le ad$」推出 $ad = bc$。

**⑥ 与加法相容。** 设 $a/b \le c/d$，即 $ad \le bc$。对任意 $e/f$（$f > 0$），

$$\frac{a}{b} + \frac{e}{f} = \frac{af + be}{bf}, \qquad \frac{c}{d} + \frac{e}{f} = \frac{cf + de}{df}.$$

交叉相乘：$(af + be)df \le (cf + de)bf \iff adf^2 + bedf \le cbf^2 + debf$。混合项 $bedf = debf$ 相消，得 $f^2(ad - bc) \le 0$，即 $ad \le bc$，成立。

> 续见 notes/thm.rat-ordered-field.3.md
