# 高斯曲率　`def.gauss-curvature`　·　说明
根 `../`

⚠️ **符号与指标顺序**（本包全包统一）：$R_{ijk\ell} = \langle R(\partial_{i},\partial_{j})\partial_{k},\partial_{\ell}\rangle$，于是单位球面（$K = 1$、$g_{ij} = \delta_{ij}$）上 $R_{1221} = 1$、$R_{1212} = -1$。很多书写成「$K = R_{1212}/\det g$」，那用的是另一种指标顺序（或另一种 $R$ 的符号），数学上是同一件事。**判断约定对不对的检查只有一条：单位球面必须给出 $K = 1$。**

**与缩并写法 $\frac{1}{2}g^{ik}g^{j\ell}R_{ijk\ell}$ 的关系**：二维只有一个独立分量，把四个指标枚举一遍就得到 $K = -\frac{1}{2}g^{ik}g^{j\ell}R_{ijk\ell}$（本包约定下的符号）。两个写法给的是同一个数，差别只在指标顺序带来的负号。

**两条路都通向它**：

- 内蕴方向：$R$ 只含 $g$ 及其一、二阶导数（$\Gamma$ 一阶、$R$ 含 $\partial\Gamma$），所以只要知道 $I$ 就能把 $K$ 算出来；
- 外在方向：$K = k_{1}k_{2} = \det(h_{ij})$，用的是两个主曲率。

> 续见 notes/def.gauss-curvature.2.md
