# 弱 Hausdorff 紧生成空间是紧生成空间的反射子范畴　`thm.cgwh-reflective`　·　说明
根 `../`

于是 $R \subseteq R_{f}$（$R$ 是交），所以 $f$ 在 $R$ 的每个类上取常值，从而**唯一地**穿过商：$\exists!\, \bar f : X/R \to Y$ 使 $\bar f\circ\eta_{X} = f$ ✓。
- **$\mathrm{CGWH}$ 全忠实坐进 $\mathrm{CG}$**：$Y$ 本身弱 Hausdorff 时 $\eta_{Y} : Y \to Y/R_{Y}$ 是同胚（$R_{Y}$ 是 $\Delta_{Y}$ 本身），于是反射在 $\mathrm{CGWH}$ 上的分量是恒等 ✓。
两条合起来就是「$\mathrm{CGWH}$ 是 $\mathrm{CG}$ 的反射子范畴，反射是 $X\mapsto X/R$」。∎
⚠️ **方向**：等价关系取得**越大**，商掉得越**多**、空间越粗。所以「最小」的闭等价关系给出「最经济」的弱 Hausdorff 化 —— 这也是为什么反射先 $k$-化（$X\rightsquigarrow kX$）、再商最小闭等价关系、两步都函子性。
