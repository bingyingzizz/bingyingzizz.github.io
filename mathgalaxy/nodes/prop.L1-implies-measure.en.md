# L1 convergence implies convergence in measure　`prop.L1-implies-measure`
English entry · root `../`
[in graph](../#n=prop.L1-implies-measure)　·　[Chinese page (authoritative)](./prop.L1-implies-measure.md)

> English: **draft** · machine-drafted, pending author review; the Chinese page is authoritative.

layer 28 · proposition · cluster Measurable Functions and Convergence (`analysis.measurable`) · Functions of a Real Variable / Mathematical Analysis

## Statement · **draft**
If $f_n \to f$ in $L^1$, then $f_n \to f$ in measure:

$$\int |f_n - f| \to 0 \implies f_n \xrightarrow{\ \mu\ } f$$

## Notes · **draft**
The tool is the **Markov (Chebyshev) inequality**:

$$
\mu(\{|g| \ge \varepsilon\}) \le (1/\varepsilon)\cdot\int |g| d\mu$$

> continued in nodes/prop.L1-implies-measure.en.2.md
