# 闭曲面分类定理　`thm.classification-surfaces`　·　说明
根 `../`

**第三步（完整可查）**：标准形的 $\chi$ 直接数。可定向 $4g$ 边形取中心扇形三角剖分：顶点 $2$（中心 + 一个边界顶点类）、边 $2g$（配对边界边）$+4g$（辐条）$=6g$、面 $4g$，故 $\chi=2-6g+4g=2-2g$；不可定向 $2k$ 边形同理得 $\chi=2-k$。两族在（可定向性，$\chi$）上互不重合：可定向侧 $\chi=2-2g\le2$ 且为偶数，$g=(2-\chi)/2$；不可定向侧 $\chi=2-k\le1$。$\chi$ 是同胚不变量（`thm.euler-characteristic`），所以标准形互不同胚。

⭐ **判据（可定向侧）**：$g=\tfrac{1}{2}\operatorname{rank}H_{1}(S;\mathbb{Z})$（`def.genus`），且 $\chi(S)=2-2g$（`prop.eulerchar-genus`，仍 skeleton：它的「任意曲面化到标准形」那一步正是本节点的第 2 步）。所以「两个闭可定向曲面同胚当且仅当亏格相同当且仅当 $\chi$ 相同」—— 分类定理说的「只有一个整数不变量」。

> 续见 notes/thm.classification-surfaces.4.md
