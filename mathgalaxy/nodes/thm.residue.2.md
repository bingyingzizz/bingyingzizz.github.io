# 留数定理　`thm.residue`　·　续页（第 2 页）
[在星图里打开](../#n=thm.residue)　·　第 1 页 [nodes/thm.residue.md](./thm.residue.md)

## 陈述（续）
设 $\Omega$ 是有界区域，边界 $\partial\Omega$ 由有限条分段光滑的简单闭曲线组成、取正向。$f$ 在 $\Omega$ 上除有限个点 $z_1, \cdots, z_n$ 外全纯，这些点都是**孤立**奇点且不在 $\partial\Omega$ 上；并且 $f$ 在 $\overline{\Omega}$ 的某个**邻域**上、除这些点外全纯。（⚠ 最后这一条不能省：只说「奇点不在边界上」不够 —— 例 $\Omega = \mathbb{D}$、$f = 1/(1-z)$，$z = 1$ 落在 $\
partial\mathbb{D}$ 上而 $f$ 在那里没有定义，$\oint_{\partial\Omega} f\,dz$ 根本不存在。）则
$$\oint_{\partial\Omega} f(z)\,\mathrm{d}z = 2\pi i \sum_{k=1}^{n} \operatorname{Res}(f, z_k).$$

> 续见 [nodes/thm.residue.3.md](./thm.residue.3.md)
