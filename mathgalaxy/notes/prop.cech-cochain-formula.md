# Čech 上链的具体公式　`prop.cech-cochain-formula`　·　说明
根 `../`

**证明。** 按定义 $\check{C}^{\bullet}(\mathfrak{X}, M) = \operatorname{Hom}_{\mathbb{Z}}(\mathbb{Z}\cdot X_{\bullet}, M)$ ✓，而 Čech 脉的 $n$ 次项是 $X_{n} = \coprod_{i_{0},\ldots,i_{n}} X_{i_{0}} \times_{X} \cdots \times_{X} X_{i_{n}}$ ✓。自由对象把余积换成直和、把取值写成 Hom：

$$\operatorname{Hom}_{\mathbb{Z}}\Bigl(\bigoplus_{i_{0},\ldots,i_{n}} \mathbb{Z}\cdot\bigl(X_{i_{0}} \times_{X} \cdots \times_{X} X_{i_{n}}\bigr),\ M\Bigr) = \prod_{i_{0},\ldots,i_{n}} M\bigl(X_{i_{0}} \times_{X} \cdots \times_{X} X_{i_{n}}\bigr) ✓$$

∎
