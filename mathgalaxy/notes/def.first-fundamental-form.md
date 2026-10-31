# 第一基本形式　`def.first-fundamental-form`　·　说明
根 `../`

$I$ 是 $\mathbb{R}^{3}$ 的内积沿 $r$ 的**拉回**：$\mathrm{d}r$ 把参数域的切向量送进切平面，再用 $\mathbb{R}^{3}$ 的内积量。所以 $I$ 只看见「曲面上的长度」，看不见「曲面怎么弯」—— 弯曲在 $II$ 里。

**为什么正交标架下是两平方和**：$\mathrm{d}r = \sum_{i}\omega^{i}e_{i}$ 且 $e_{i}$ 标准正交，故 $\langle \mathrm{d}r, \mathrm{d}r\rangle = \sum_{i}(\omega^{i})^{2}$；沿曲面 $\omega^{3} = 0$，只剩两项。

**矩阵**：$(g_{ij}) = \begin{pmatrix} E & F \\ F & G \end{pmatrix}$，$\det g = EG-F^{2} > 0$。后面所有「$h$ 相对 $g$ 的特征值」都在用这个矩阵。

⚠️ 换参数化会改 $E,F,G$ 的表达式，$I$ 作为张量不变。正交参数化（$F = 0$）能让公式短一半 —— 那串 $\Gamma$ 就只在那种情形写出来。
