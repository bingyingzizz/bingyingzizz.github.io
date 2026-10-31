# 面积元　`def.area-element`　·　说明
根 `../`

**为什么是 Gram 行列式**：二维平行四边形的面积 = 底乘高，平方之后就是两个向量的 Gram 矩阵的行列式（Lagrange 恒等式）。所以 $\mathrm{d}A$ 就是切映射把参数域面积放大多少倍的因子。

**与换元公式同源**：$\sqrt{\det(\mathrm{d}r^{\mathsf{T}}\mathrm{d}r)}$ 正是非线性换元的 Jacobi 因子。注意 $\mathrm{d}r$ 不是方阵，$(\det\mathrm{d}r)^{2}$ 没有意义，所以必须走 Gram 行列式这一条。

⚠️ **面积元是密度、不是形式**：换参数化时 $\sqrt{\det g}$ 与 $\mathrm{d}u\,\mathrm{d}v$ 一起变，乘积不变且**不变号**；而 $\omega^{1}\wedge\omega^{2}$ 在反向参数化下变号。要把它当 $2$-形式积分，必须先取定定向（`def.orientable-surface`、`def.integral-form`）。

**面积是内蕴的、定向是额外的**：面积不依赖参数化（换元即知），带符号面积才依赖定向。所以「面积」写得出来而「$\int\omega^{1}\wedge\omega^{2}$ 的符号」要另外交代。

> 续见 notes/def.area-element.2.md
