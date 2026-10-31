# 仿紧空间上的 Čech 就是上同调　`thm.paracompact-cech-equals-sheaf`　·　说明
根 `../`

**标准证明的三个零件。**

**① Čech 层复形是消解。** 对覆盖 $\mathfrak{U} = (U_{i})_{i}$ 令

$$\check{\mathcal{C}}^{p}(\mathfrak{U}, \mathcal{M}) := \prod_{i_{0} < \cdots < i_{p}} j_{*}\bigl(\mathcal{M}|_{U_{i_{0} \cdots i_{p}}}\bigr),$$

其中 $j : U_{i_{0} \cdots i_{p}} \hookrightarrow X$ 是含入。$\mathcal{M}$ 是层，故 Čech 正合性可逐点验证；于是 $\check{\mathcal{C}}^{\bullet}(\mathfrak{U}, \mathcal{M})$ 是 $\mathcal{M}$ 的一个消解，且取整体截面就回到 $\check{C}^{\bullet}(\mathfrak{U}, \mathcal{M})$。

**② 每一项是软的。** 仿紧 Hausdorff 上，局部有限覆盖配**单位分解**（见 `prop.paracompact-partition-unity`）：单位分解可以把 $j_{*}(\mathcal{M}|_{U})$ 型的层按覆盖成员劈开，于是 $\check{\mathcal{C}}^{p}$ 是**细的**（fine，带从属于 $\mathfrak{U}$ 的分割）；细层在仿紧空间上**软**，而软层对 $\Gamma$ **无环**（软层可以「局部化到闭集」，再用单位分解把整体截面拼出来）。

> 续见 notes/thm.paracompact-cech-equals-sheaf.2.md
