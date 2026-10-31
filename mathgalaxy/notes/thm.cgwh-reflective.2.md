# 弱 Hausdorff 紧生成空间是紧生成空间的反射子范畴　`thm.cgwh-reflective`　·　说明
根 `../`

**证明。** 记 $R$ 为 $X$ 上**所有 $k$-闭等价关系**的交（$X$ 紧生成时 $k$-闭 = 闭，所以这就是「最小闭等价关系」；等价关系的交仍是等价关系 ✓），令 $\eta_{X} : X \to X/R$ 为商映射。
- **$X/R \in \mathrm{CGWH}$**：$X/R$ 紧生成（商的紧生成）✓；而 $R$ $k$-闭 $\implies$ $X/R$ 弱 Hausdorff（上一条）✓。
- **反射的泛性质**：设 $Y \in \mathrm{CGWH}$、$f : X \to Y$ 连续。则
$$R_{f} := \{(x, x') : f(x) = f(x')\} = (f,f)^{-1}(\Delta_{Y})$$
是 $X$ 上的等价关系；由 $\Delta_{Y}$ $k$-闭（$Y$ 弱 Hausdorff）与「$k$-闭沿连续映射拉回仍 $k$-闭」得 $R_{f}$ $k$-闭。于是 $R \subseteq R_{f}$（$R$ 是交），所以 $f$ 在 $R$ 的每个类上取常值，从而**唯一地**穿过商：$\exists!\, \bar f : X/R \to Y$ 使 $\bar f\circ\eta_{X} = f$ ✓。
- **$\mathrm{CGWH}$ 全忠实坐进 $\mathrm{CG}$**：$Y$ 本身弱 Hausdorff 时 $\eta_{Y} : Y \to Y/R_{Y}$ 是同胚（$R_{Y}$ 是 $\Delta_{Y}$ 本身），于是反射在 $\mathrm{CGWH}$ 上的

> 续见 notes/thm.cgwh-reflective.3.md
