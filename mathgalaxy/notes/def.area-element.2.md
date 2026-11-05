# 面积元　`def.area-element`　·　说明
根 `../`

⚠️ **② 定向相容不能省**：$\mathrm{d}A = \omega^{1}\wedge\omega^{2}$ 只在余标架与参数定向相容时成立。同一张平面 $r(u,v) = (u,v,0)$ 上取 $\omega^{1} = \mathrm{d}u$、$\omega^{2} = -\mathrm{d}v$，得到的是 $-\mathrm{d}u\wedge\mathrm{d}v$：符号反了，量值不变。所以作为**密度**的面积要用 $\lvert\omega^{1}\wedge\omega^{2}\rvert$（下一段说的「面积元不变号」正是这件事）。

**与换元公式同源**：$\sqrt{\det(\mathrm{d}r^{\mathsf{T}}\mathrm{d}r)}$ 正是非线性换元的 Jacobi 因子。注意 $\mathrm{d}r$ 不是方阵，$(\det\mathrm{d}r)^{2}$ 没有意义，所以必须走 Gram 行列式这一条。

⚠️ **面积元是密度、不是形式**：换参数化时 $\sqrt{\det g}$ 与 $\mathrm{d}u\,\mathrm{d}v$ 一起变，乘积不变且**不变号**；而 $\omega^{1}\wedge\omega^{2}$ 在反向参数化下变号。

要把它当 $2$-形式积分，必须先取定定向（`def.orientable-surface`、`def.integral-form`）。

> 续见 notes/def.area-element.3.md
