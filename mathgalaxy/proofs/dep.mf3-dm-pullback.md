# 开集上的「$\mathrm{d}$ 与拉回交换」定出流形上的外微分
`dep.mf3-dm-pullback` · 推出 · strong 边 · 根 `../`

`prop.pullback-forms` 拉回（开集间） → `prop.exterior-derivative-manifold` 外微分

流形上的外微分只能在图卡里定义；要证明它与图卡无关，须说明两张卡上的坐标公式在重叠处给出同一个算子。
重叠处两张卡的坐标变换是开集间的微分同胚，`prop.pullback-forms` 已证 $F^{\ast}\mathrm{d} = \mathrm{d}F^{\ast}$（开集版本）。
于是两边的坐标公式被这条等式拉到同一个形式，图卡无关性成立，外微分良定义。∎

> 图卡无关性靠「$\mathrm{d}$ 与拉回交换」这条（开集版已证），它才是证明的引擎。
