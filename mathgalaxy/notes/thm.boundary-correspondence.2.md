# 边界对应定理　`thm.boundary-correspondence`　·　说明
根 `../`

② 于是 $f(\overline{\Omega})=f(\Omega)\cup f(\partial\Omega)\subseteq \mathbb{D}\cup\partial\mathbb{D}=\overline{\mathbb{D}}$，且包含 $\mathbb{D}$；$\overline{\Omega}$ 紧、$\overline{\mathbb{D}}$ Hausdorff，连续双射从紧空间到 Hausdorff 空间自动是同胚。（子引理）□（这一段是真正的证明，只用了紧性。）

**缺口：延拓的存在与边界单射。** 这正是 Carathéodory 定理的内容：$\partial\Omega$ 局部连通 $\implies$ 连续延拓存在（Carathéodory 1913）；Jordan 曲线 $\implies$ $\partial\Omega$ 局部连通（Jordan 曲线是紧度量空间里的简单闭曲线，局部连通）。边界单射可用 crosscut / prime end 论证，或对逆映射 $f^{-1}:\mathbb{D}\to\Omega$ 同法延拓后比较。本图没有 Carathéodory 节点，也没有 crosscut / prime end 节点；`thm.schwarz-reflection` 只处理**解析弧**（圆、直线）的反射延拓，不能覆盖一般 Jordan 曲线。

> 续见 notes/thm.boundary-correspondence.3.md
