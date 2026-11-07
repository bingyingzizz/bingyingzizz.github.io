# 商构造 + $\mathbb{Z}$ 是整环 $\implies$ $\mathbb{Q}$ 是有序域
`imp.rat-ordered-field` · 推出 · strong 边 · 根 `../`

`def.rat` 有理数 ℚ + `thm.int-ring` ℤ 是交换整环 → `thm.rat-ordered-field` ℚ 是有序域

例如分配律：$\frac{a}{b}\left(\frac{c}{d} + \frac{e}{f}\right)$ 与 $\frac{ac}{bd} + \frac{ae}{bf}$ 都等于 $\frac{acf + bde}{bdf}$。
**③ 乘法逆元。** $a/b \ne 0$ 即 $a \ne 0$；由 $\mathbb{Z}$ 无零因子，$ab \ne 0$，故 $b/a$ 合法，且 $(a/b)(b/a) = ab/ba = 1/1$。
**④ 序良定义。** 对 $b, d > 0$ 定义 $a/b \le c/d :\iff ad \le bc$。

换代表元时两边同乘正元 $b'd'$ 与 $bd$，由 $\mathbb{Z}$ 的序相容性不等号不变。
**⑤ 全序与两条相容性。** 三分律逐项给出全序。

加法：交叉相乘后混合项 $bedf = debf$ 相消，剩 $f^2(ad - bc) \le 0$。

乘法：$0 \le e/f$ 时 $aedf \le cebf$；$e = 0$ 平凡，$e > 0$ 时两边除以 $ef > 0$ 回到 $ad \le cb$。
**⑥ 嵌入。** $n \mapsto n/1$ 保 $+$、$\cdot$、$\le$，且为单射。∎
