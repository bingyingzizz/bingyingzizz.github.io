# Gram 矩阵　`def.gram-matrix`　·　说明
根 `../`

**各方向用到的假设**（Gram 判据依赖内积正定，矩阵只涉及有限组向量）：
- Gram 定义 $\implies$ 对称且半正定：展开 $c^TGc=\lVert\sum_i c_iv_i\rVert^2$，不需要谱定理或空间完备性。
- 向量无关 $\iff$ Gram 正定：两个方向都用内积的零范数只对应零向量；仅有半正定型时，非零零范数向量给出反例。
- $\det G=0$ $\iff$ 向量相关：由上述恒等式得 $\ker G=\ker A$，再用有限维矩阵可逆判据；行列式非负可用实对称矩阵谱定理。
- 正定矩阵 $\implies$ 内积：需矩阵实对称（复情形 Hermite），再定义 $\langle x,y\rangle=x^TGy$；任意一组相关向量的 Gram 矩阵只半正定。
