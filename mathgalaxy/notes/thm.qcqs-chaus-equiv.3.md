# 拟紧 与 拟紧拟分离 的判定　`thm.qcqs-chaus-equiv`　·　说明
根 `../`

**各方向用到的假设**（表示性来自紧 Hausdorff 商理论而非任意拓扑斯）：
- 紧 Hausdorff 表示对象 $\implies$ 拟紧拟分离：覆盖的有限性给拟紧，紧 Hausdorff 空间间映射的纤维积仍紧 Hausdorff 给拟分离；全忠实性由次标准拓扑和 Yoneda 引理。
- 拟紧 $\implies$ 一个紧 Hausdorff 对象满覆盖，再取离散底集的 Stone–Čech 紧化 $\beta I$ 覆盖它，得到自由紧 Hausdorff 覆盖；这用 Stone–Čech 的存在及通常的选择背景。“自由”不是阿贝尔群 $\mathbb Z[I]$。
- 自由紧 Hausdorff 对象满覆盖 $\implies$ 拟紧：满态射像保持拟紧，实质依据是覆盖的拉回、有限子覆盖与覆盖下降，不是无限点集上的逐点有限性。
- 拟紧拟分离 $\implies$ 紧 Hausdorff 可表示是有代价的方向：由覆盖 $S\to X$ 得到紧的关系 $S\times_XS$，将其像识别为 $S\times S$ 中闭等价关系，再用紧 Hausdorff 空间的闭关系商定理及有效下降。
- 拟紧不能删：无限离散凝聚态集拟分离但不拟紧，不能由

> 续见 notes/thm.qcqs-chaus-equiv.4.md
