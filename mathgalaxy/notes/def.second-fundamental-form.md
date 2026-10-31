# 第二基本形式　`def.second-fundamental-form`　·　说明
根 `../`

**一个负号，三种写法**：$\langle \mathrm{d}r, -\mathrm{d}n\rangle = -\sum_{i}\omega^{i}\omega^{i}_{\ 3} = \sum_{i,j}h_{ij}\omega^{i}\omega^{j}$。这里把负号放进系数（$h_{ij} = -c_{ij}$），好处是 $h$ 恰好就是 $W$ 的矩阵，「主曲率 $=$ $h$ 的特征值」不用再配符号。

⭐ **对称性不用算**：由 $\mathrm{d}\omega^{3} = 0$ 得到（`lem.second-form-symmetric`），不需要「$r_{uu}$、$r_{uv}$ 的混合偏导相等」。

**与参数无关**：$II$ 是张量，$L, M, N$ 只是它在 $(u,v)$ 下的分量。$n \mapsto -n$ 时 $II \mapsto -II$，而 $W$ 的定义里已带负号、随之一并变号，所以 $K$ 与 $|H|$ 不变。

**几何意义**：$II(v,v)$ 是「沿 $v$ 走、在法向上弯多少」；$L, M, N$ 与 $E, F, G$ 一起给出两个主曲率（解 $\det(h-kg) = 0$）。
